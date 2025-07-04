import { Plus } from "lucide-react"
import { useResumeDocuments } from "@/hooks/use-resume-documents"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

export function ResumeDashboard({
  onCreateResume,
}: {
  onCreateResume: () => void
}) {
  const documents = useResumeDocuments((state) => state.documents)

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 p-4">
      {documents.map((doc) => (
        <Card key={doc.id} className="cursor-pointer">
          <CardHeader>
            <CardTitle>{doc.name}</CardTitle>
          </CardHeader>
        </Card>
      ))}
      <div
        onClick={onCreateResume}
        className="border-dashed border-2 rounded-lg flex flex-col items-center justify-center cursor-pointer py-8 text-muted-foreground hover:bg-accent"
      >
        <Plus className="size-8" />
        <span className="mt-2">New Resume</span>
      </div>
    </div>
  )
}
