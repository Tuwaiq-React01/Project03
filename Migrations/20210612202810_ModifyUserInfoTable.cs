using Microsoft.EntityFrameworkCore.Migrations;

namespace ASP.NETCoreWebApplication.Migrations
{
    public partial class ModifyUserInfoTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserName",
                table: "UserInfo");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "UserInfo",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "UserInfo",
                keyColumn: "Id",
                keyValue: 1,
                column: "Name",
                value: "SSSmmm123");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "UserInfo");

            migrationBuilder.AddColumn<string>(
                name: "UserName",
                table: "UserInfo",
                type: "text",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "UserInfo",
                keyColumn: "Id",
                keyValue: 1,
                column: "UserName",
                value: "SSSmmm123");
        }
    }
}
