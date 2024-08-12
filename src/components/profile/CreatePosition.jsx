import Button from "../button/Button"

export default function CreatePosition(){
    return(
        <div className="create-position-card">
            <h1>Create Position</h1>
            <div className="create-position">
                <form action="">
                    <label>Title</label>
                    <input type="text" />
                    <label>Location</label>
                    <input type="text" />
                    <label>Description</label>
                    <input type="text" />
                    <Button title="Create" className='btn'/>
                </form>
            </div>
        </div>
    )
}