import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import { useForm } from "react-hook-form";
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import useAuth from '../../hooks/useAuth';
import '../../styles/Dialoge.css';
import DoubtService from '../../manageApi/Doubt.Service';
import Preloader from './Preloader';

const Transition = React.forwardRef(function Transition(
  props, ref,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Dialoge({setOpen, open, doubt}) {
  const {description, email, name, title, _id} = doubt;
  const [loading, setloading] = React.useState(false);
  const {user} = useAuth();
  // handel form
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    setloading(true);
    const answer = data.answer;
    const teacher_name = user.displayName;
    const teacher_email = user.email;
    const status = "resolved";
    const soluation = {answer, teacher_name, teacher_email, status};
    DoubtService.postTeacherAns(_id, soluation)
    .then(res => {
      setloading(false);
      reset();
      setOpen(false);
      window.location.reload();
    })
    .catch(err => console.log(err))
  }
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className='dialoge-area'>
          <div className="dialog-title">
            <h3>{title}</h3>
            <div className="dialog-description">
              <p>{description}</p>
            </div>
            <div className="answer-form">
              <h4>Post Your Answer</h4>
             {loading ? <Preloader /> 
             :<form onSubmit={handleSubmit(onSubmit)}>
                <textarea className='answer-box' name="" id="" cols="20" rows="8" placeholder='Write your ans.....' {...register("answer", { required: true })} />
                <button className='answer-button' type='submit'>Submit</button>
              </form>}
            </div>
          </div>
        </div>
        <DialogActions>
          <button className='dialog-close-button' onClick={() => setOpen(false)}>close</button>
        </DialogActions>
      </Dialog>
    </>
  );
}
