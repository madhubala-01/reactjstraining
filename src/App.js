import './App.css';

function App() {
  return (
    <div className="App">
     
        <header><strong><center>Registration Form</center></strong></header>
        <form>
         
          <label>Name</label>
          <input type = "text" /><br></br>
          <label>Date of Birth</label>
          <input type = "date" /><br></br>
          <label>Blood Group</label>
          <select>
            <option>A +ve</option>
            <option>A -ve</option>
            <option>B +ve</option>
            <option>B -ve</option>
            <option>AB +ve</option>
            <option>AB -ve</option>
            <option>O +ve</option>
            <option>O -ve</option>
          </select><br></br>
          <label>Gender</label>
          <input type ="radio" name="gender" />Male
          <input type ="radio" name="gender" />Female
          <input type ="radio" name="gender" />Transgender <br></br>
          <label>Phone number</label>
          <input type ="text" /><br></br>
          <label>Email Id</label>
          <input type= "text" /><br></br>
          <center><input type= "submit" />
          
          </center>
        </form>
      
     
    </div>
  );
}

export default App;
