import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/shared/video.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  constructor(private service: VideoService, private toastr: ToastrService ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){
    if(form != null)
      form.resetForm();

    this.service.formData = {
      id:null,
      video_title: '',
      video_description: '',
      categories: '',
      created_at: null,
      updated_at: null,
      user: null,
    }
  }

  debugger
  onSubmit(form: NgForm){
    if(form.value.id == null)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm){
      this.service.postVideo(form.value).subscribe(res => {
          this.toastr.success("Inserted Successfully",'VID. Added')
          this.resetForm(form);
          this.service.refreshList();
      });
  }


  updateRecord(form: NgForm){
      this.service.putVideo(form.value).subscribe(res => {
        this.toastr.warning("Updated Successfully",'VID. updated')
        this.resetForm(form);
        this.service.refreshList();
    });
  }

}
