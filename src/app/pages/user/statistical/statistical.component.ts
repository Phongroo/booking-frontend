import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-statistical',
  templateUrl: './statistical.component.html',
  styleUrls: ['./statistical.component.css']
})
export class StatisticalComponent implements OnInit {

  startTime: any = new Date();
  endTime: any = new Date();

  num: any;
  isSubmit=false;

  constructor(private service: TicketService, private datePipe: DatePipe) { }
  ngOnInit(): void {
    
  }
  search() {
    const startDate = this.datePipe.transform(this.startTime, 'yyyy-MM-dd');
    const endDate = this.datePipe.transform(this.endTime, 'yyyy-MM-dd');
    const payload = {
      startTime: startDate,
      endTime: endDate
    }
    console.log(payload)
    this.service.getStatistical(payload).subscribe(
      (res: any) => {
        this.isSubmit=true;
        this.num=res.data.data;
        console.log(res);

      }
    )
  }
}
