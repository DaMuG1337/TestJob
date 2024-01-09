import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Watchlist } from './models/watchlist.model';
import { CreateBooksResponse } from './response';

@Injectable()
export class WatchlistService {
  constructor(
    @InjectModel(Watchlist)
    private readonly watchlistRepository: typeof Watchlist,
  ) {}

  async createbooks(user, dto): Promise<CreateBooksResponse> {
    const watchlist = {
      user: user.id,
      name: dto.name,
      booksId: dto.booksId,
      //ДОБАВИТЬ ВОЗМОЖНОСТЬ ДОБАВЛЕНИЯ ОПСИНАИЯ АВТОРА И ДАТЫ
    };
    await this.watchlistRepository.create(watchlist);
    return watchlist;
  }

  async deletbooks(userId: number, booksId: number): Promise<boolean> {
    await this.watchlistRepository.destroy({
      where: { id: booksId, user: userId },
    });
    return true;
  }
  async updatebooks(userId: number, booksId: number): Promise<boolean> {
    await this.watchlistRepository.destroy({
      where: { id: booksId, user: userId },
    });
    return true;
  }
}
