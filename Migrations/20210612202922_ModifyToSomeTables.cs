using Microsoft.EntityFrameworkCore.Migrations;

namespace ASP.NETCoreWebApplication.Migrations
{
    public partial class ModifyToSomeTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "User",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "UserInfo",
                keyColumn: "Id",
                keyValue: 1);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "User",
                columns: new[] { "Id", "Name", "UserInfoId" },
                values: new object[] { 1, "Sultan", 0 });

            migrationBuilder.InsertData(
                table: "UserInfo",
                columns: new[] { "Id", "Email", "Name", "Password" },
                values: new object[] { 1, "sultan.whatever@whatever.com", "SSSmmm123", "**************" });
        }
    }
}
