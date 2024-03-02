import Card from "../UI/Card"

const WorkerList = (props) => {
  return (
    <div className="mt-8">
        <Card>
            <ul>
                <li className="flex justify-between p-2">
                    <span className="font-bold"> İsim </span>
                    <span className="font-bold"> Maaş </span>
                </li>

                {props.workers.map((worker) => ( 
                    <li className="flex justify-between cursor-pointer hover:shadow-xl p-2">
                    <span>Furkan</span>
                    <span className="text-teal-700 font-medium">25000tl</span>
                    </li>
                ))} 
            </ul>

        </Card>
    </div>
  )
}

export default WorkerList