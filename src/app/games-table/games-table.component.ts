import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-games-table',
  templateUrl: './games-table.component.html',
  styleUrls: ['./games-table.component.css']
})
export class GamesTableComponent implements AfterViewInit {
  dataSource = new MatTableDataSource([
    { titulo: 'The Legend of Zelda: Breath of the Wild', anoLancamento: 2017, desenvolvedora: 'Nintendo', plataforma: 'Nintendo Switch' },
    { titulo: 'The Witcher 3: Wild Hunt', anoLancamento: 2015, desenvolvedora: 'CD Projekt Red', plataforma: 'PC, PS4, Xbox One' },
    { titulo: 'Red Dead Redemption 2', anoLancamento: 2018, desenvolvedora: 'Rockstar Games', plataforma: 'PS4, Xbox One' },
    { titulo: 'Super Mario Odyssey', anoLancamento: 2017, desenvolvedora: 'Nintendo', plataforma: 'Nintendo Switch' },
    { titulo: 'The Last of Us Part II', anoLancamento: 2020, desenvolvedora: 'Naughty Dog', plataforma: 'PS4, PS5' },
    { titulo: 'Mass Effect 2', anoLancamento: 2010, desenvolvedora: 'BioWare', plataforma: 'PC, PS3, Xbox 360' },
    { titulo: 'Dark Souls', anoLancamento: 2011, desenvolvedora: 'FromSoftware', plataforma: 'PS3, Xbox 360' },
    { titulo: 'Final Fantasy VII', anoLancamento: 1997, desenvolvedora: 'Square Enix', plataforma: 'PS1' },
    { titulo: 'Minecraft', anoLancamento: 2011, desenvolvedora: 'Mojang', plataforma: 'PC, várias' },
    { titulo: 'Counter-Strike: Global Offensive', anoLancamento: 2012, desenvolvedora: 'Valve', plataforma: 'PC, PS3, Xbox 360' },
    { titulo: 'Bioshock', anoLancamento: 2007, desenvolvedora: '2K Games', plataforma: 'PC, PS3, Xbox 360' },
    { titulo: 'The Elder Scrolls V: Skyrim', anoLancamento: 2011, desenvolvedora: 'Bethesda', plataforma: 'PC, PS3, Xbox 360' },
    { titulo: 'Grand Theft Auto V', anoLancamento: 2013, desenvolvedora: 'Rockstar Games', plataforma: 'PC, PS4, Xbox One' },
    { titulo: 'Metal Gear Solid V: The Phantom Pain', anoLancamento: 2015, desenvolvedora: 'Kojima Productions', plataforma: 'PC, PS4, Xbox One' },
    { titulo: 'Hollow Knight', anoLancamento: 2017, desenvolvedora: 'Team Cherry', plataforma: 'PC, várias' },
    { titulo: 'The Elder Scrolls IV: Oblivion', anoLancamento: 2006, desenvolvedora: 'Bethesda', plataforma: 'PC, PS3, Xbox 360' },
    { titulo: 'Super Smash Bros. Ultimate', anoLancamento: 2018, desenvolvedora: 'Nintendo', plataforma: 'Nintendo Switch' },
    { titulo: 'Horizon Zero Dawn', anoLancamento: 2017, desenvolvedora: 'Guerrilla Games', plataforma: 'PS4, PC' },
    { titulo: 'Fallout 4', anoLancamento: 2015, desenvolvedora: 'Bethesda', plataforma: 'PC, PS4, Xbox One' },
    { titulo: 'Dark Souls III', anoLancamento: 2016, desenvolvedora: 'FromSoftware', plataforma: 'PC, PS4, Xbox One' },
    { titulo: 'Resident Evil 4', anoLancamento: 2005, desenvolvedora: 'Capcom', plataforma: 'PS2, GC, várias' },
    { titulo: 'Portal 2', anoLancamento: 2011, desenvolvedora: 'Valve', plataforma: 'PC, PS3, Xbox 360' },
    { titulo: 'Stardew Valley', anoLancamento: 2016, desenvolvedora: 'ConcernedApe', plataforma: 'PC, várias' },
    { titulo: 'Celeste', anoLancamento: 2018, desenvolvedora: 'Maddy Makes Games', plataforma: 'PC, várias' },
    { titulo: 'The Legend of Zelda: Ocarina of Time', anoLancamento: 1998, desenvolvedora: 'Nintendo', plataforma: 'N64, várias' },
    { titulo: 'Overwatch', anoLancamento: 2016, desenvolvedora: 'Blizzard Entertainment', plataforma: 'PC, PS4, Xbox One' },
    { titulo: 'Civilization VI', anoLancamento: 2016, desenvolvedora: 'Firaxis Games', plataforma: 'PC, várias' },
  ]);

  displayedColumns: string[] = ['titulo', 'anoLancamento', 'desenvolvedora', 'plataforma'];

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
