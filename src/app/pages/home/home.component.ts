import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../../service/player/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  players: any[] = [];

  constructor(private playerService: PlayerService) {

  }

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe(
      (res) => {
        this.players = res.body ?? [];
    });
  }

}
