import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GameService } from './../../game.service';
import { GameScore } from 'src/app/state/app.state';

@Component({
	selector: 'app-leader-board',
	templateUrl: './leader-board.component.html',
	styleUrls: ['./leader-board.component.scss']
})
export class LeaderBoardComponent implements OnInit {
	displayedColumns: string[] = ['position', 'Username', 'Date', 'Score'];
	leaderBoard: Observable<GameScore[]>;
	constructor(private gameService: GameService) { }

	ngOnInit(): void {
		this.leaderBoard = this.gameService.getUsersLeaderBoard();
	}

}


// <mat-table [dataSource]="dataSource" class="mat-elevation-z8">
//   <!-- Position Column -->
//   <ng-container matColumnDef="position">
//     <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>
//     <mat-cell *matCellDef="let element"> {{element.position}} </mat-cell>
//   </ng-container>

//   <!-- Name Column -->
//   <ng-container matColumnDef="name">
//     <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>
//     <mat-cell *matCellDef="let element"> {{element.name}} </mat-cell>
//   </ng-container>

//   <!-- Weight Column -->
//   <ng-container matColumnDef="weight">
//     <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>
//     <mat-cell *matCellDef="let element"> {{element.weight}} </mat-cell>
//   </ng-container>

//   <!-- Symbol Column -->
//   <ng-container matColumnDef="symbol">
//     <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>
//     <mat-cell *matCellDef="let element"> {{element.symbol}} </mat-cell>
//   </ng-container>

//   <mat-header-row *matHeaderRowDef="displayedColumns"></mat-header-row>
//   <mat-row *matRowDef="let row; columns: displayedColumns;"></mat-row>
// </mat-table>
