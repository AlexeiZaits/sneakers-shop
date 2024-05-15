import { GoBackKeyDown, GoBackOnBlur } from "@/features/index";
import { Button, Modal } from "@/shared/index";
import { LightBox } from "@/widgets/lightBox";

export function ModalGood(){
    return <Modal>
    <Button>
      X
    </Button>
    <GoBackKeyDown>
      <GoBackOnBlur>
        <LightBox/>
      </GoBackOnBlur>
    </GoBackKeyDown>
</Modal>
}