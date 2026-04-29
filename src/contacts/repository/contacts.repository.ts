import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContactDto } from '../dto/create-contact.dto';
import { UpdateContactDto } from '../dto/update-contact.dto';

@Injectable()
export class ContactsRepository {
    constructor(private readonly prisma: PrismaService) {}

    async findAll() {
        return this.prisma.contact.findMany();
    }

    async findOne(id: number) {
        return this.prisma.contact.findUnique({
            where: { id },
        });
    }

    async create(data: CreateContactDto) {
        return this.prisma.contact.create({
            data,
        });
    }

    async update(id: number, data: Partial<UpdateContactDto>) {
        return this.prisma.contact.update({
            where: { id },
            data,
        });
    }

    async delete(id: number) {
        return this.prisma.contact.delete({
            where: { id },
        });
    }

}