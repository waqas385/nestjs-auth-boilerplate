import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialSchema1771332896129 implements MigrationInterface {
  name = "InitialSchema1771332896129";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`fullName\` varchar(255) NOT NULL, \`phoneNumber\` varchar(255) NOT NULL, \`whatsappNumber\` varchar(255) NULL, \`role\` enum ('customer', 'admin') NOT NULL DEFAULT 'customer', \`isActive\` tinyint NOT NULL DEFAULT 1, \`lastLoginAt\` timestamp NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_97672ac88f789774dd47f7c8be\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`addresses\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userId\` int NOT NULL, \`addressLine1\` varchar(255) NOT NULL, \`addressLine2\` varchar(255) NULL, \`city\` varchar(100) NOT NULL, \`state\` varchar(100) NOT NULL, \`postalCode\` varchar(20) NOT NULL, \`isDefault\` tinyint NOT NULL DEFAULT 0, \`addressType\` enum ('shipping', 'billing', 'both') NOT NULL DEFAULT 'both', \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`addresses\``);
    await queryRunner.query(
      `DROP INDEX \`IDX_97672ac88f789774dd47f7c8be\` ON \`users\``,
    );
    await queryRunner.query(`DROP TABLE \`users\``);
  }
}
