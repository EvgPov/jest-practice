export async function fetchUserById(id) {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")

    if (!response.ok) {
      throw new Error("Failed to fetch users")
    }
    const users = await response.json()  
    const user = users.find(user => user.id === id);  
    
    if (!user) throw new Error("User not found");

    return user
 
  } catch(error) {
    throw error
  }
}