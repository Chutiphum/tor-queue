import ListCard from '@/components/admin/ListCard'

export default function ShopList() {
  const res = []

  for (let i = 0; i < 20; i++) {
    res.push(
      <ListCard
        key={i}
        room={{
          id: i,
          title: 'Your mom ' + i,
          time: new Date(),
          description: 'Lorem ipsum',
        }}
      />
    )
  }

  return <div className="space-y-2 mt-8">{res}</div>
}
