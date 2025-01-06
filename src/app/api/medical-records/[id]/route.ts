import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }>}
  
) {
  const id = (await params).id;
  try {
    const record = await prisma.medicalRecord.findUnique({
      where: { id }
    })

    if (!record) {
      return NextResponse.json(
        { error: 'Medical record not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(record)
  } catch (error) {
    console.error('Error fetching medical record:', error)
    return NextResponse.json(
      { error: 'Failed to fetch medical record' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  let body;

  try {
    body = await request.json();
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON in request body" }, { status: 400 });
  }

  if (!body || typeof body !== 'object') {
    return NextResponse.json({ error: "Request body must be a valid JSON object" }, { status: 400 });
  }

  // Remove id, createdAt, and updatedAt from the body
  delete body.id;
  delete body.createdAt;
  delete body.updatedAt;

  try {
    const updatedRecord = await prisma.medicalRecord.update({
      where: { id },
      data: body,
    });
    return NextResponse.json(updatedRecord);
  } catch (error) {
    console.error("Error updating record:", error);
    return NextResponse.json({ error: "Failed to update record" }, { status: 500 });
  }
}



export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id;
  try {
      await prisma.medicalRecord.delete({
          where: { id },
      });
      return NextResponse.json({ message: "Record deleted successfully" });
  } catch (error) {
      console.error("Error deleting record:", error);
      return NextResponse.json({ error: "Failed to delete record" }, { status: 500 });
  }
}


