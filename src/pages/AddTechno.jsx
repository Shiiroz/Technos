export default function AddTechno(){
    return(
        <div className="AddTechno">
            <h1>Add Techno</h1>
            <div>
                <form>
                    <label htmlFor="techno-name">Name</label>
                    <br/>
                    <input type="text" name="techno-name" id="techno-name" />
                    <br/>
                    <input type="submit" value="Add Techno" />
                </form>
            </div>
        </div>
    )
}