'use client'

import { useTransition } from 'react'
import { useState, useCallback } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { createProblem, updateProblem, deleteProblem, createClinicalNote, updateClinicalNote, deleteClinicalNote, createTreatment, updateTreatment, deleteTreatment } from '../actions/problemActions'
import { Problem, ClinicalNote, Treatment } from '@/types/problem'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { PlusCircle, Trash } from 'lucide-react'
import { toast } from '@/hooks/use-toast'

interface Props {
  medicalRecordId: string;
  initialProblems: Problem[];
}

const ProblemManager = ({ medicalRecordId, initialProblems }: Props) => {
  const [problems, setProblems] = useState<Problem[]>(initialProblems)
  const [isPending, startTransition] = useTransition()

  const addProblem = async () => {
    startTransition(async () => {
      try {
        const newProblem = await createProblem({ note: '', medicalRecordId })
        setProblems((prev) => [...prev, newProblem])
        toast({ title: 'Problem added successfully' })
      } catch (error) {
        toast({ title: 'Failed to add problem', variant: 'destructive' })
      }
    })
  }

  const deleteProblemHandler = async (problemId: string) => {
    startTransition(async () => {
      try {
        await deleteProblem(problemId)
        setProblems((prev) => prev.filter((p) => p.id !== problemId))
        toast({ title: 'Problem deleted successfully' })
      } catch (error) {
        toast({ title: 'Failed to delete problem,',description:'Problem is not Empty please Clear the Notes and Treatments', variant: 'destructive' })
      }
    })
  }

  const debouncedUpdateProblem = useDebouncedCallback(
    async (id: string, data: { note: string }) => {
      try {
        const updatedProblem = await updateProblem(id, data)
        setProblems((prev) =>
          prev.map((p) => (p.id === id ? { ...p, ...updatedProblem } : p))
        )
        toast({ title: 'Problem updated successfully' })
      } catch (error) {
        toast({ title: 'Failed to update problem', variant: 'destructive' })
      }
    },
    1000
  )

  const handleProblemChange = (problemId: string, value: string) => {
    setProblems((prev) =>
      prev.map((p) => (p.id === problemId ? { ...p, note: value } : p))
    )
    debouncedUpdateProblem(problemId, { note: value })
  }

  const addClinicalNote = async (problemId: string) => {
    startTransition(async () => {
      try {
        const newNote = await createClinicalNote(problemId, { note: '' })
        setProblems((prev) =>
          prev.map((p) =>
            p.id === problemId
              ? { ...p, clinicalNotes: [...p.clinicalNotes, newNote] }
              : p
          )
        )
        toast({ title: 'Clinical note added successfully' })
      } catch (error) {
        toast({ title: 'Failed to add clinical note', variant: 'destructive' })
      }
    })
  }

  const debouncedUpdateClinicalNote = useDebouncedCallback(
    async (id: string, data: { note: string }) => {
      try {
        const updatedNote = await updateClinicalNote(id, data)
        setProblems((prev) =>
          prev.map((p) => ({
            ...p,
            clinicalNotes: p.clinicalNotes.map((n) =>
              n.id === id ? { ...n, ...updatedNote } : n
            ),
          }))
        )
        toast({ title: 'Clinical note updated successfully' })
      } catch (error) {
        toast({ title: 'Failed to update clinical note', variant: 'destructive' })
      }
    },
    1000
  )

  const handleClinicalNoteChange = (noteId: string, value: string) => {
    setProblems((prev) =>
      prev.map((p) => ({
        ...p,
        clinicalNotes: p.clinicalNotes.map((n) =>
          n.id === noteId ? { ...n, note: value } : n
        ),
      }))
    )
    debouncedUpdateClinicalNote(noteId, { note: value })
  }

  const deleteClinicalNoteHandler = async (problemId: string, noteId: string) => {
    startTransition(async () => {
      try {
        await deleteClinicalNote(noteId)
        setProblems((prev) =>
          prev.map((p) =>
            p.id === problemId
              ? {
                  ...p,
                  clinicalNotes: p.clinicalNotes.filter((n) => n.id !== noteId),
                }
              : p
          )
        )
        toast({ title: 'Clinical note deleted successfully' })
      } catch (error) {
        toast({ title: 'Failed to delete clinical note', variant: 'destructive' })
      }
    })
  }

  const addTreatment = async (problemId: string) => {
    startTransition(async () => {
      try {
        const newTreatment = await createTreatment(problemId, { note: '' })
        setProblems((prev) =>
          prev.map((p) =>
            p.id === problemId
              ? { ...p, treatments: [...p.treatments, newTreatment] }
              : p
          )
        )
        toast({ title: 'Treatment added successfully' })
      } catch (error) {
        toast({ title: 'Failed to add treatment', variant: 'destructive' })
      }
    })
  }

  const debouncedUpdateTreatment = useDebouncedCallback(
    async (id: string, data: { note: string }) => {
      try {
        const updatedTreatment = await updateTreatment(id, data)
        setProblems((prev) =>
          prev.map((p) => ({
            ...p,
            treatments: p.treatments.map((t) =>
              t.id === id ? { ...t, ...updatedTreatment } : t
            ),
          }))
        )
        toast({ title: 'Treatment updated successfully' })
      } catch (error) {
        toast({ title: 'Failed to update treatment', variant: 'destructive' })
      }
    },
    1000
  )

  const handleTreatmentChange = (treatmentId: string, value: string) => {
    setProblems((prev) =>
      prev.map((p) => ({
        ...p,
        treatments: p.treatments.map((t) =>
          t.id === treatmentId ? { ...t, note: value } : t
        ),
      }))
    )
    debouncedUpdateTreatment(treatmentId, { note: value })
  }

  const deleteTreatmentHandler = async (problemId: string, treatmentId: string) => {
    startTransition(async () => {
      try {
        await deleteTreatment(treatmentId)
        setProblems((prev) =>
          prev.map((p) =>
            p.id === problemId
              ? {
                  ...p,
                  treatments: p.treatments.filter((t) => t.id !== treatmentId),
                }
              : p
          )
        )
        toast({ title: 'Treatment deleted successfully' })
      } catch (error) {
        toast({ title: 'Failed to delete treatment', variant: 'destructive' })
      }
    })
  }

  return (
    <div className="space-y-6">
      {problems.map((problem) => (
        <Card key={problem.id}>
          <CardHeader>
            <CardTitle>Problem</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label htmlFor={`problem-${problem.id}`} className="block text-sm font-medium text-gray-700 mb-1">
                  Problem Note:
                </label>
                <Input
                  id={`problem-${problem.id}`}
                  value={problem.note}
                  onChange={(e) => handleProblemChange(problem.id, e.target.value)}
                  placeholder="Enter problem description"
                />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Clinical Notes</h3>
                {problem.clinicalNotes.map((note) => (
                  <div key={note.id} className="flex items-center space-x-2 mb-2">
                    <Textarea
                      value={note.note}
                      onChange={(e) => handleClinicalNoteChange(note.id, e.target.value)}
                      placeholder="Enter clinical note"
                    />
                    <Button
                      onClick={() => deleteClinicalNoteHandler(problem.id, note.id)}
                      variant="destructive"
                      size="icon"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  onClick={() => addClinicalNote(problem.id)}
                  variant="outline"
                  size="sm"
                  className="mt-2"
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Clinical Note
                </Button>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Treatments</h3>
                {problem.treatments.map((treatment) => (
                  <div key={treatment.id} className="flex items-center space-x-2 mb-2">
                    <Textarea
                      value={treatment.note}
                      onChange={(e) => handleTreatmentChange(treatment.id, e.target.value)}
                      placeholder="Enter treatment"
                    />
                    <Button
                      onClick={() => deleteTreatmentHandler(problem.id, treatment.id)}
                      variant="destructive"
                      size="icon"
                    >
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  onClick={() => addTreatment(problem.id)}
                  variant="outline"
                  size="sm"
                  className="mt-2"
                >
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Treatment
                </Button>
              </div>
            </div>
            <Button
              onClick={() => deleteProblemHandler(problem.id)}
              variant="destructive"
              size="sm"
              className="mt-4"
              type='button'
            >
              Delete Problem
            </Button>
          </CardContent>
        </Card>
      ))}
      <Button onClick={addProblem} className="w-full" disabled={isPending}>
        <PlusCircle className="mr-2 h-4 w-4" />
        Add New Problem
        {/* {isPending ? 'Adding...' : 'Add New Problem'} */}
      </Button>
    </div>
  )
}

export default ProblemManager

