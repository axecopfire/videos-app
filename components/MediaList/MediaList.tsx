export default function MediaList({ items }) {
  return <pre>{JSON.stringify(items, null, 4)}</pre>;
}
