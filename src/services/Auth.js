import Client from './api'

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('/register', data)
    console.log(data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const LoginUser = async (data) => {
  try {
    const res = await Client.post('/login', data)
    localStorage.setItem('token', res.data.token)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    const res = await Client.get(`/session`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetUser = async (token) => {
  try {
    const response = await Client.get(`/session`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error retrieving user information:', error);
    throw error;
  }
};

export const CreateReview = async (data) => {
    try {
      const res = await Client.post(
        `/review/new_review/user/${data.userId}/listing/${data.listingId}`,
        data
      )
      return res.data
    } catch (error) {
      throw error
    }
  }
  
  export const UpdateReview = async (data) => {
    try {
      const res = await Client.put(`/review/${data.id}`, data)
      return res.data
    } catch (error) {
      throw error
    }
  }
  
  export const DestroyReview = async (data) => {
    try {
      const res = await Client.delete(`/review/${data.id}`, data)
      return res.data
    } catch (error) {
      throw error
    }
  }
  
  export const CreateListing = async (data) => {
    try {
      const res = await Client.post(`/listing/new_listing`, data)
      return res.data
    } catch (error) {
      throw error
    }
  }
  export const UpdateListing = async (data) => {
    try {
      const res = await Client.put(`/listing/${data.id}`, data)
      return res.data
    } catch (error) {
      throw error
    }
  }
  
  export const DestroyListing = async (data) => {
    try {
      const res = await Client.delete(`/listing/${data.id}`, data)
      return res.data
    } catch (error) {
      throw error
    }
  }