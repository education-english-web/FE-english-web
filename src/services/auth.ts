'use client'

import axios from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

// export async function signUp(formData: FormData) {
//   const userData = {
//     username: formData.get('username'),
//     email: formData.get('email'),
//     password: formData.get('password'),
//     phonenumber: formData.get('phonenumber'),
//   }
//
//   try {
//     const response = await fetch(`${API_BASE_URL}/users/sign-up`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     })
//
//     if (!response.ok) {
//       throw new Error('Sign up failed')
//     }
//
//     const data = response.json()
//     return { success: true, data }
//   } catch (error) {
//     return { success: false, error: (error as Error).message }
//   }
// }


export async function forgotPassword(formData: FormData) {
  const email = formData.get('email')

  try {
    // Assuming there's a forgot-password endpoint. Adjust as needed.
    const response = await fetch(`${API_BASE_URL}/users/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    if (!response.ok) {
      throw new Error('Failed to process forgot password request')
    }

    const data = await response.json()
    return { success: true, data }
  } catch (error) {

    // return { success: false, error: (error as Error).message }
  }
}

export async function loginWithOAuth(provider: 'facebook' | 'google') {
//   redirect(`${API_BASE_URL}/login/oauth:${provider}`)
}

