import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';
import Book from './interface';

@Controller('books')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getTodos(): Promise<Book[]> {
    return await this.appService.getBooks();
  }

  @Post()
  async createTodo(@Body() book: Book): Promise<Book> {
    return await this.appService.createBook(book);
  }

  @Post(':id')
  async getTodo(@Param() id: string): Promise<Book> {
    return await this.appService.getBook(id);
  }

  @Delete(':id')
  async deleteTodo(@Param() id: string): Promise<any> {
    return await this.appService.deleteBook(id);
  }
}
