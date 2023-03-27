import { MigrationInterface, QueryRunner } from "typeorm";

export class default1679887841503 implements MigrationInterface {
    name = 'default1679887841503'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "display_name" text NOT NULL, "email" text NOT NULL, "password" text NOT NULL, "image" text, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
