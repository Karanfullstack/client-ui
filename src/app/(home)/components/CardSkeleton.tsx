import { Skeleton } from "@/components/ui/skeleton";

export function CardSkeleton() {
    return (
        <div>
            <div className="grid  w-max m-auto grid-cols-4 gap-4 gap-y-6 gap-x-6 justify-items-center py-8      ">
                {Array.from({ length: 8 }).map((_, index) => (
                    <div key={index}>
                        <Skeleton className="text-black flex flex-col justify-center items-center w-64 h-80 bg-gray-50   overflow-hidden gap-2 rounded-xl shadow-white  ">
                            <Skeleton className="bg-gray-200  rounded-4xl  h-[150px] w-[200px]" />
                            <Skeleton className="bg-gray-200 h-[10px] w-[200px]" />
                            <Skeleton className="bg-gray-200 h-[10px] w-[180px]" />
                            <div className="flex justify-between gap-3 mt-3">
                                <Skeleton className="bg-gray-200 h-[20px] w-[100px]" />
                                <Skeleton className="bg-gray-200 h-[20px] w-[100px]" />
                            </div>
                        </Skeleton>
                    </div>
                ))}
            </div>
        </div>
    );
}
