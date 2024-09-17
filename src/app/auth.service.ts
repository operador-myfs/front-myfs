import { Injectable } from '@angular/core';
import { signIn, signUp } from 'aws-amplify/auth'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  async signUp(username: string, password: string, email: string) {
    try {
      const user = await signUp({
        username:email,
        password,
        options: {
          userAttributes: {
            email,
            name : username,
          },
        }
      });
      return user;
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  }


  async signIn(username: string, password: string) {
    try {
      const user = await signIn({
        username: "hello@mycompany.com",
        password: "hunter2",
      })
      return user;
    } catch (error) {
      console.error('Error signing in:', error);
      throw error;
    }
  }

  // async signOut() {
  //   try {
  //     await Auth.signOut();
  //   } catch (error) {
  //     console.error('Error signing out:', error);
  //     throw error;
  //   }
  // }
}
