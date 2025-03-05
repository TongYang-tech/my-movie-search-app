import { useGetPlaceholder } from '../Hooks/useQuery'

const App = () => {
  const { data, loading, error } = useGetPlaceholder('https://jsonplaceholder.typicode.com/users')
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  const renderData = data.map((item) => {
    console.log(item)
    return (
      <li key={item.id}>
        <h2>{item.name}</h2>
        <div>
          <p>UserName: {item.username}</p>
          <p>Email: {item.email}</p>
        </div>
      </li>
    )
  })
  return <ul>{renderData}</ul>
}

export default App
