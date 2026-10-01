export async function fetchAveragePostsPerUser(companyNameFragment) {
  try {
    const usersResponse = await fetch("https://jsonplaceholder.typicode.com/users")

    if (!usersResponse.ok) throw new Error ("Failed to fetch users")

    const users = await usersResponse.json()
    const matchingUsers = users.filter(user => user.company.name.includes(companyNameFragment))

    if (matchingUsers.length === 0) throw new Error("Division by zero: no matching users found")
  
    const postsCounts = await Promise.all(
      matchingUsers.map(async (user) => {
        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)

        if (!postsResponse.ok) throw new Error("Failed to fetch posts")

        const posts = await postsResponse.json()
        return posts.length
      })
    )  

    const totalPosts = postsCounts.reduce((sum, count) => sum + count, 0)
    return totalPosts / matchingUsers.length

  } catch(err) {
      throw err
  }
}    
