using Microsoft.EntityFrameworkCore.Migrations;

namespace MoviesLibraryNew.Migrations
{
    public partial class UpdateMoviesDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FavoriteMovies_User_UserId",
                table: "FavoriteMovies");

            migrationBuilder.DropForeignKey(
                name: "FK_FavoriteTvShows_User_UserId",
                table: "FavoriteTvShows");

            migrationBuilder.DropPrimaryKey(
                name: "PK_User",
                table: "User");

            migrationBuilder.RenameTable(
                name: "User",
                newName: "Users");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Users",
                table: "Users",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_FavoriteMovies_Users_UserId",
                table: "FavoriteMovies",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_FavoriteTvShows_Users_UserId",
                table: "FavoriteTvShows",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FavoriteMovies_Users_UserId",
                table: "FavoriteMovies");

            migrationBuilder.DropForeignKey(
                name: "FK_FavoriteTvShows_Users_UserId",
                table: "FavoriteTvShows");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Users",
                table: "Users");

            migrationBuilder.RenameTable(
                name: "Users",
                newName: "User");

            migrationBuilder.AddPrimaryKey(
                name: "PK_User",
                table: "User",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_FavoriteMovies_User_UserId",
                table: "FavoriteMovies",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_FavoriteTvShows_User_UserId",
                table: "FavoriteTvShows",
                column: "UserId",
                principalTable: "User",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
