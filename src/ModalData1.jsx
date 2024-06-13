

export default function ModalData1 ({date,time}) {
    console.log("in modal data")
    console.log(date)
    console.log(time)
    return (
        
        <p>
            In: {date} --- {time}  <br />
            
            <hr />
        </p>
    );
}