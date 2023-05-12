export const registrationAdminAction = async (obj) => {
  try {
    //create auth user
    const promiseUser = createUserWithEmailAndPassword(
      auth,
      obj.email,
      obj.password
    );

    toast.promise(promiseUser, {
      pending: "please wait....",
      success: "User has been created successfully,please login now",
    });

    const { user } = await promiseUser;

    if (user?.uid) {
      //create user data and store in database
    }
  } catch (error) {
    toast.error(error.message);
  }
};
