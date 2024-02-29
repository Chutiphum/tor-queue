import ListCard from '@/components/admin/ListCard'

export default function ShopList() {
  const res = []

  for (let i = 0; i < 20; i++) {
    res.push(
      <ListCard
        key={i}
        room={{
          rId: i,
          title: 'Your mom ' + i,
          description: 'Lorem ipsum',
          startTime: new Date(),
          endTime: new Date(),
          images: [],
          enabled: true,
          createdAt: new Date(2024, 0, 1),
          updatedAt: new Date(2024, 0, 1),
        }}
      />
    )
  }

  return <div className="space-y-2 mt-8">{res}</div>
}
