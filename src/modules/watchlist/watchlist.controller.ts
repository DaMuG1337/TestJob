import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { WatchListDto } from './dto';
import { JwtAuthGuard } from '../../guards/jwt-guard';
import {CreateBooksResponse} from "./response";

@Controller('watchlist')
export class WatchlistController {
  constructor(private readonly watchlistService: WatchlistService) {}

  @UseGuards(JwtAuthGuard)
  @Post('create')
  createAsset(@Body() assetDto: WatchListDto, @Req() request): Promise <CreateBooksResponse> {
    const user = request.user;
    return this.watchlistService.createbooks(user, assetDto);
  }

  //@Get('books')
  books() {
    //return;
  }

  @UseGuards(JwtAuthGuard)
  @Patch('update')
  updatebooks(@Query('id') booksId: number, @Req() request): Promise<boolean> {
    const { id } = request.user;
    return this.watchlistService.updatebooks(id, booksId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  deletebooks(@Query('id') booksId: number, @Req() request): Promise<boolean> {
    const { id } = request.user;
    return this.watchlistService.deletbooks(id, booksId);
  }
}
