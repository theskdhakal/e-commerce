import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebase-config";
import { toast } from "react-toastify";
import { USERSTABLE } from "../../assets/constants";

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
      setNewAdminUserAction({ uid: user.uid, ...obj });
      return Promise.resolve(true);
    }
  } catch (error) {
    toast.error(error.message);
  }
};

const setNewAdminUserAction = async ({ uid, confirmPassword, ...rest }) => {
  try {
    await setDoc(doc(db, USERSTABLE, uid), rest);
  } catch (error) {
    toast.error(error.message);
  }
};
