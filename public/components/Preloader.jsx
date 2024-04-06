import { Logo } from "./Icons";

export default function Preloader() {
    return (
        <>
            <div className="fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center">
                <div className="h-[135px] relative">
                    <div className="preloader">
                        <div className="preloader nested1">
                            <div className="preloader nested2">
                                <div className="preloader nested3">
                                    <div className="preloader nested4">
                                        <div className="preloader nested5">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}