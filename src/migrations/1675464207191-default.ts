import { MigrationInterface, QueryRunner } from "typeorm";

export class default1675464207191 implements MigrationInterface {
    name = 'default1675464207191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "order" ("id" SERIAL NOT NULL, "total_value" integer NOT NULL, "client_name" character varying NOT NULL, "client_city" character varying NOT NULL, "client_address" character varying NOT NULL, "client_phone" character varying NOT NULL, "productss" integer array NOT NULL, "restaurantId" integer, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "restaurant" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "category" character varying NOT NULL, "city" character varying NOT NULL, "enderess" character varying NOT NULL, "phone" character varying NOT NULL, CONSTRAINT "PK_649e250d8b8165cb406d99aa30f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "name" character varying NOT NULL, "price" integer NOT NULL, "category" character varying NOT NULL, "restaurantId" integer, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_c93f22720c77241d2476c07cabf" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_3249a5709fb37437198f7dff801" FOREIGN KEY ("restaurantId") REFERENCES "restaurant"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_3249a5709fb37437198f7dff801"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_c93f22720c77241d2476c07cabf"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "restaurant"`);
        await queryRunner.query(`DROP TABLE "order"`);
    }

}
