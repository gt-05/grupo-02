export default function Section(props) {

    let align = props.titleAlign ? props.titleAlign : 'left';
    let position = `text-${align}`;
    return (
        <>

            <div className="flex flex-col max-w-[1228px] m-auto">
                <div className="flex">
                    <div className={position + ' grow'}>
                        <h2>{props.title}</h2>
                    </div>
                    {props.link && (
                        <a className="w-auto flex mr-5" href={props.link.href}>{props.link.text}<img className="ml-2.5" src="src/assets/images/arrow.svg"/></a>
                    )}
                </div>
                {props.children}
            </div>


        </>
    )

}
