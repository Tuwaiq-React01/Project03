using Microsoft.EntityFrameworkCore.Migrations;

namespace ASP.NETCoreWebApplication.Migrations
{
    public partial class ModifyUserInfoTableV2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "AnimeQuotes");

            migrationBuilder.AlterColumn<string>(
                name: "Quote",
                table: "AnimeQuotes",
                maxLength: 255,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Character",
                table: "AnimeQuotes",
                maxLength: 255,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "CharDescreption",
                table: "AnimeQuotes",
                maxLength: 255,
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.InsertData(
                table: "AnimeQuotes",
                columns: new[] { "Id", "CharDescreption", "Character", "Quote" },
                values: new object[] { 1, "Roy Mustang is a character from Full Metal Alchemist who isn't afraid to speak his mind. In this quote, he talks about how imperfect the world can be. Ironically, alchemy can make it perfect via equivalent exchange.  But in the end, Roy says that the world being imperfect is 'perfect.' There is no such thing as perfection. Because once there is perfection, where do you go", "Roy Mustang (Full Metal Alchemist)", "The world isn't perfect. But it's there for us, doing the best it can....that's what makes it so damn beautiful." });

            migrationBuilder.InsertData(
                table: "AnimeQuotes",
                columns: new[] { "Id", "CharDescreption", "Character", "Quote" },
                values: new object[] { 2, "Hitsugaya is the captain of Rangiku and one of the captains in Bleach. Known as one of the youngest captains ever, he is known for his strategies, brain and being as cold as ice. Speaking, Hitsugaya reiterates that even though they may grow and travel further apart, they should not disappear like fireworks", "Hitsugaya Toshiro (Bleach)", "We are all like fireworks: we climb, we shine and always go our separate ways and become further apart. But even when that time comes, let's not disappear like a firework and continue to shine.. forever" });

            migrationBuilder.InsertData(
                table: "User",
                columns: new[] { "Id", "Name", "UserInfoId" },
                values: new object[] { 1, "Sultan", 0 });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AnimeQuotes",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "AnimeQuotes",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "User",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.AlterColumn<string>(
                name: "Quote",
                table: "AnimeQuotes",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 255,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Character",
                table: "AnimeQuotes",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 255,
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "CharDescreption",
                table: "AnimeQuotes",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldMaxLength: 255,
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "AnimeQuotes",
                type: "text",
                nullable: true);
        }
    }
}
