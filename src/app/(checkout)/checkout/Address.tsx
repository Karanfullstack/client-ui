import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { CustomerI } from "@/types";

export default function Address({ customer }: CustomerI) {
    return (
        <section className="mt-5">
            {/* address title */}
            <div className="flex text-sm justify-between items-center">
                <span>Address</span>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="link" color="text-primaryf">
                            + Add your new addreess
                        </Button>
                    </DialogTrigger>
                    <DialogContent className=" w-[350px] bg-accent">
                        <DialogHeader>
                            <DialogTitle>Address</DialogTitle>
                            <DialogDescription>
                                We can save your address for the next time.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="flex items-center space-x-2">
                            <div className="grid flex-1 gap-3">
                                <Textarea />
                                <div className="flex justify-end">
                                    <Button>Save</Button>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
            <div className="mt-4">
                <RadioGroup
                    onValueChange={(value) => console.log(value)}
                    className="grid grid-cols-2 gap-6"
                >
                    {customer.addresses.map((address) => (
                        <Card
                            key={address._id}
                            className="flex px-2  items-center shadow-none rounded-sm space-x-2"
                        >
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value={address.text} id={address._id} />
                                <Label htmlFor="r2">{address.text}</Label>
                            </div>
                        </Card>
                    ))}

                    {/* <Card className="flex items-center px-2  rounded-sm  shadow-none  gap-2">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="default" id="r1" />
                            <Label htmlFor="r1">Poland,ulica 14 poznan</Label>
                        </div>
                    </Card> */}
                </RadioGroup>
            </div>
        </section>
    );
}
