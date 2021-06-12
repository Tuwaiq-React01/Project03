using Microsoft.EntityFrameworkCore.Migrations;

namespace ASP.NETCoreWebApplication.Migrations
{
    public partial class ModifyingAnimeTablev2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Anime");

            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "Anime",
                maxLength: 255,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Type",
                table: "Anime");

            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Anime",
                type: "varchar(255)",
                maxLength: 255,
                nullable: true);
        }
    }
}
