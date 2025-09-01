import { redirect } from 'next/navigation';

export default function FilterPage() {
  // Редірект на All notes за замовчуванням
  redirect('/notes/filter/All');
}
