import { redirect } from 'next/navigation';

export default function NotesPage() {
  // Редірект на нову структуру з фільтрами
  redirect('/notes/filter/All');
}
