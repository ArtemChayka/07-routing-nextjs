'use client';

import { useQuery } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import css from '@/components/NotePreview/NotePreview.module.css';
import { useRouter } from 'next/navigation';

export default function NotePreviewClient({ noteId }: { noteId: string }) {
  const router = useRouter();
  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['note', noteId],
    queryFn: () => fetchNoteById(noteId),
  });

  if (isLoading) {
    return <div className={css.previewLoading}>Loading...</div>;
  }

  if (error) {
    return <div className={css.previewError}>Error: {error.message}</div>;
  }

  if (!note) {
    return <div className={css.previewNotFound}>Note not found.</div>;
  }

  return (
    <div className={css.previewContainer}>
      <h2 className={css.previewTitle}>{note.title}</h2>
      <p className={css.previewContent}>{note.content}</p>
      <div className={css.previewTags}>
        Tags:{' '}
        {note.tags.map((tag: string) => (
          <span key={tag} className={css.previewTag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
