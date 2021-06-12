using Microsoft.EntityFrameworkCore.Migrations;
using MySql.Data.EntityFrameworkCore.Metadata;

namespace ASP.NETCoreWebApplication.Migrations
{
    public partial class CreatingUsersTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Anime",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "User",
                columns: new[] { "Id", "Name" },
                values: new object[] { 1, "Sultan" });

            migrationBuilder.CreateIndex(
                name: "IX_Anime_UserId",
                table: "Anime",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Anime_User_UserId",
                table: "Anime",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Anime_User_UserId",
                table: "Anime");

            migrationBuilder.DropTable(
                name: "User");

            migrationBuilder.DropIndex(
                name: "IX_Anime_UserId",
                table: "Anime");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Anime");
        }
    }
}
