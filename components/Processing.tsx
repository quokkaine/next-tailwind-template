import Loading from '@/app/loading'

export const Processing = ({ text }: { text?: string }) => {
    return (
        <div className="w-full h-full ">
            <div className="flex flex-col">
                <div className="m-auto">
                    <Loading />
                </div>
                {text && (
                    <div className="m-auto">
                        <div className="mx-auto mt-6 text-center">
                            <p className="text-lg text-muted">{text}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
