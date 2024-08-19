type SignInDialogProps = {};
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LoginForm from "./LoginForm";
import { Button } from "./ui/button";
export default function SignInDialog({}: SignInDialogProps) {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Button> Sign in</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Sign in</DialogTitle>
          </DialogHeader>
          <LoginForm />
        </DialogContent>
      </Dialog>
    </>
  );
}
