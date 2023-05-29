

export default function Contact(){
    return(
        <>
        <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Full Name</label>
    <input type="text" class="form-control"  placeholder="Enter Name"/>
  </div>
  <div class="form-group">
    <label >Email</label>
    <input type="text" class="form-control" placeholder="Email"/>
  </div>
  <div class="form-group">
    <label >Message</label>
    <input type="text" class="form-control" placeholder="Message"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </>
    )
}