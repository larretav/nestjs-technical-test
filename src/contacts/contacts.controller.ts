import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Req } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Role } from 'src/auth/enums/role.enum';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ApiCreateContact } from './swagger/create-contact/create-contact.swagger';
import { ApiGetContacts } from './swagger/get-contacts/get-contacts.swagger';
import { ApiGetContactById } from './swagger/get-contact-by-id/get-contact-by-id.swagger';
import { ApiUpdateContact } from './swagger/update-contact/update-contact.swagger';
import { ApiDeleteContact } from './swagger/delete-contacts/delete-contacts.swagger';
import { ApiGetContactsByTerm } from './swagger/get-contacts-by-term/get-contacts-by-term.swagger';

@ApiTags('Contacts')
@Controller('contacts')
@Auth(Role.Admin, Role.User)
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) { }

  @Post()
  @ApiCreateContact()
  create(@Body() createContactDto: CreateContactDto) {
    return this.contactsService.create(createContactDto);
  }

  @Get()
  @ApiGetContacts()
  findAll(@Req() req: any) {
    return this.contactsService.findAll(req.user.userId);
  }


  @Get(':id')
  @ApiGetContactById()
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.contactsService.findOne(id);
  }

  @Get('search/:term')
  @ApiGetContactsByTerm()
  findSearch(@Param('term') term: string) {
    return this.contactsService.findByTerm(term);
  }

  @Patch(':id')
  @ApiUpdateContact()
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateContactDto: UpdateContactDto) {
    return this.contactsService.update(id, updateContactDto);
  }

  @Delete(':id')
  @ApiDeleteContact()
  remove(@Param('id', ParseUUIDPipe) id: string, @Req() req: any) {
    return this.contactsService.remove(id, req?.user);
  }
}
