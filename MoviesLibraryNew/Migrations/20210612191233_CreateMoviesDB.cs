using Microsoft.EntityFrameworkCore.Migrations;

namespace MoviesLibraryNew.Migrations
{
    public partial class CreateMoviesDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Movies",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(nullable: true),
                    Date = table.Column<string>(nullable: true),
                    Summary = table.Column<string>(nullable: true),
                    Rating = table.Column<int>(nullable: false),
                    Poster = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movies", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "TvShows",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(nullable: true),
                    Date = table.Column<string>(nullable: true),
                    Summary = table.Column<string>(nullable: true),
                    Rating = table.Column<int>(nullable: false),
                    Poster = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TvShows", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "User",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    GoogleId = table.Column<string>(nullable: true),
                    Email = table.Column<string>(nullable: true),
                    Name = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_User", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FavoriteMovies",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(nullable: false),
                    MovieId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FavoriteMovies", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FavoriteMovies_Movies_MovieId",
                        column: x => x.MovieId,
                        principalTable: "Movies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FavoriteMovies_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FavoriteTvShows",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(nullable: false),
                    TvShowId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FavoriteTvShows", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FavoriteTvShows_TvShows_TvShowId",
                        column: x => x.TvShowId,
                        principalTable: "TvShows",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FavoriteTvShows_User_UserId",
                        column: x => x.UserId,
                        principalTable: "User",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Movies",
                columns: new[] { "Id", "Date", "Poster", "Rating", "Summary", "Title" },
                values: new object[,]
                {
                    { 1, "2021-05-26", "https://image.tmdb.org/t/p/w300/rTh4K5uw9HypmpGslcKd4QfHl93.jpg", 9, "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.", "Cruella" },
                    { 19, "2021-05-14", "https://image.tmdb.org/t/p/w300/m6bUeV4mczG3z2YXXr5XDKPsQzv.jpg", 7, "A special crimes investigator forms an unlikely bond with a serial killer to bring down a global child sex trafficking syndicate.", "I Am All Girls" },
                    { 18, "2021-04-04", "https://image.tmdb.org/t/p/w300/msI5a9TPnepx47JUb2vl88hb80R.jpg", 8, "On school break, Marinette heads to Shanghai to meet Adrien. But after arriving, Marinette loses all her stuff, including the Miraculous that allows her to turn into Ladybug!", "Miraculous World: Shanghai – The Legend of Ladydragon" },
                    { 17, "2021-03-26", "https://image.tmdb.org/t/p/w300/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg", 8, "Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a \"nobody.\" When two thieves break into his home one night, Hutch's unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.", "Nobody" },
                    { 16, "2021-04-30", "https://image.tmdb.org/t/p/w300/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg", 6, "A lonesome stranger with nerves of steel must track down and kill a rogue hitman to satisfy an outstanding debt. But the only information he's been given is a time and location where to find his quarry. No name. No description. Nothing.", "The Virtuoso" },
                    { 15, "2021-03-18", "https://image.tmdb.org/t/p/w300/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg", 8, "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.", "Zack Snyder's Justice League" },
                    { 14, "2020-10-16", "https://image.tmdb.org/t/p/w300/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg", 8, "Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!", "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train" },
                    { 13, "2021-05-05", "https://image.tmdb.org/t/p/w300/xCEg6KowNISWvMh8GvPSxtdf9TO.jpg", 7, "A young boy finds himself pursued by two assassins in the Montana wilderness with a survival expert determined to protecting him - and a forest fire threatening to consume them all.", "Those Who Wish Me Dead" },
                    { 12, "2021-03-03", "https://image.tmdb.org/t/p/w300/lPsD10PP4rgUGiGR4CCXA6iY0QQ.jpg", 8, "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.", "Raya and the Last Dragon" },
                    { 11, "2021-04-29", "https://image.tmdb.org/t/p/w300/rEm96ib0sPiZBADNKBHKBv5bve9.jpg", 7, "An elite Navy SEAL uncovers an international conspiracy while seeking justice for the murder of his pregnant wife.", "Tom Clancy's Without Remorse" },
                    { 20, "2021-04-02", "https://image.tmdb.org/t/p/w300/dkokENeY5Ka30BFgWAqk14mbnGs.jpg", 8, "Drac tries out some new monster pets to help occupy Tinkles for playtime.", "Monster Pets: A Hotel Transylvania Short" },
                    { 9, "2021-03-24", "https://image.tmdb.org/t/p/w300/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg", 8, "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages.", "Godzilla vs. Kong" },
                    { 8, "2021-04-07", "https://image.tmdb.org/t/p/w300/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg", 8, "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.", "Mortal Kombat" },
                    { 7, "2021-05-14", "https://image.tmdb.org/t/p/w300/z8CExJekGrEThbpMXAmCFvvgoJR.jpg", 7, "Following a zombie outbreak in Las Vegas, a group of mercenaries take the ultimate gamble: venturing into the quarantine zone to pull off the greatest heist ever attempted.", "Army of the Dead" },
                    { 6, "2021-05-21", "https://image.tmdb.org/t/p/w300/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg", 7, "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.", "A Quiet Place Part II" },
                    { 5, "2021-05-12", "https://image.tmdb.org/t/p/w300/lcyKve7nXRFgRyms9M1bndNkKOx.jpg", 6, "Working in the shadow of an esteemed police veteran, brash Detective Ezekiel “Zeke” Banks and his rookie partner take charge of a grisly investigation into murders that are eerily reminiscent of the city’s gruesome past.  Unwittingly entrapped in a deepening mystery, Zeke finds himself at the center of the killer’s morbid game.", "Spiral: From the Book of Saw" },
                    { 4, "2021-03-31", "https://image.tmdb.org/t/p/w300/bShgiEQoPnWdw4LBrYT5u18JF34.jpg", 7, "Alice, a young hearing-impaired girl who, after a supposed visitation from the Virgin Mary, is inexplicably able to hear, speak and heal the sick. As word spreads and people from near and far flock to witness her miracles, a disgraced journalist hoping to revive his career visits the small New England town to investigate. When terrifying events begin to happen all around, he starts to question if these phenomena are the works of the Virgin Mary or something much more sinister.", "The Unholy" },
                    { 3, "2021-04-22", "https://image.tmdb.org/t/p/w300/M7SUK85sKjaStg4TKhlAVyGlz3.jpg", 8, "A cold and mysterious new security guard for a Los Angeles cash truck company surprises his co-workers when he unleashes precision skills during a heist. The crew is left wondering who he is and where he came from. Soon, the marksman's ultimate motive becomes clear as he takes dramatic and irrevocable steps to settle a score.", "Wrath of Man" },
                    { 2, "2021-05-25", "https://image.tmdb.org/t/p/w300/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg", 8, "Paranormal investigators Ed and Lorraine Warren encounter what would become one of the most sensational cases from their files. The fight for the soul of a young boy takes them beyond anything they'd ever seen before, to mark the first time in U.S. history that a murder suspect would claim demonic possession as a defense.", "The Conjuring: The Devil Made Me Do It" },
                    { 10, "2021-05-27", "https://image.tmdb.org/t/p/w300/ccsSqbpEqr2KK9eMvoeF8ERFCd5.jpg", 7, "Jack Halsey takes his wife, their adult kids, and a friend for a dream vacation in Kenya. But as they venture off alone into a wilderness park, their safari van is flipped over by an angry rhino, leaving them injured and desperate. Then, as two of them go in search of rescue, a bloody, vicious encounter with a leopard and a clan of hyenas incites a desperate fight for survival.", "Endangered Species" }
                });

            migrationBuilder.InsertData(
                table: "TvShows",
                columns: new[] { "Id", "Date", "Poster", "Rating", "Summary", "Title" },
                values: new object[,]
                {
                    { 12, "2021-03-24", "https://image.tmdb.org/t/p/w300/o7uk5ChRt3quPIv8PcvPfzyXdMw.jpg", 8, "Hell-bent on exacting revenge and proving he was framed for his sister's murder, Álex sets out to unearth much more than the crime's real culprit.", "Who Killed Sara?" },
                    { 13, "2021-04-18", "https://image.tmdb.org/t/p/w300/78aK4Msbr22A5PGa6PZV0pAvdwf.jpg", 8, "A detective in a small Pennsylvania town investigates a local murder while trying to keep her life from falling apart.", "Mare of Easttown" },
                    { 14, "2021-05-04", "https://image.tmdb.org/t/p/w300/WjQmEWFrOf98nT5aEfUfVYz9N2.jpg", 9, "The 'Bad Batch' of elite and experimental clones make their way through an ever-changing galaxy in the immediate aftermath of the Clone Wars.", "The Bad Batch" },
                    { 18, "2015-08-23", "https://image.tmdb.org/t/p/w300/4UjiPdFKJGJYdxwRs2Rzg7EmWqr.jpg", 8, "What did the world look like as it was transforming into the horrifying apocalypse depicted in \"The Walking Dead\"? This spin-off set in Los Angeles, following new characters as they face the beginning of the end of the world, will answer that question.", "Fear the Walking Dead" },
                    { 16, "2021-01-15", "https://image.tmdb.org/t/p/w300/glKDfE6btIRcVB5zrjspRIs4r52.jpg", 8, "Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems.", "WandaVision" },
                    { 17, "2011-04-17", "https://image.tmdb.org/t/p/w300/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg", 8, "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.", "Game of Thrones" },
                    { 11, "2018-06-12", "https://image.tmdb.org/t/p/w300/fuVuDYrs8sxvEolnYr0wCSvtyTi.jpg", 8, "After spending seventeen years in prison unfairly, a talented songwriter seeks revenge on the men who sank her and killed her family.", "The Queen of Flow" },
                    { 15, "2021-03-26", "https://image.tmdb.org/t/p/w300/yDWJYRAwMNKbIYT8ZB33qy84uzO.jpg", 9, "Mark Grayson is a normal teenager except for the fact that his father is the most powerful superhero on the planet. Shortly after his seventeenth birthday, Mark begins to develop powers of his own and enters into his father’s tutelage.", "Invincible" },
                    { 10, "2017-01-26", "https://image.tmdb.org/t/p/w300/wRbjVBdDo5qHAEOVYoMWpM58FSA.jpg", 9, "Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.", "Riverdale" },
                    { 6, "2017-09-25", "https://image.tmdb.org/t/p/w300/6tfT03sGp9k4c0J3dypjrI8TSAI.jpg", 9, "A young surgeon with Savant syndrome is recruited into the surgical unit of a prestigious hospital. The question will arise: can a person who doesn't have the ability to relate to people actually save their lives", "The Good Doctor" },
                    { 8, "2021-02-23", "https://image.tmdb.org/t/p/w300/vlv1gn98GqMnKHLSh0dNciqGfBl.jpg", 8, "After years of facing megalomaniacal supervillains, monsters wreaking havoc on Metropolis, and alien invaders intent on wiping out the human race, The Man of Steel aka Clark Kent and Lois Lane come face to face with one of their greatest challenges ever: dealing with all the stress, pressures and complexities that come with being working parents in today's society.", "Superman & Lois" },
                    { 7, "2005-03-27", "https://image.tmdb.org/t/p/w300/clnyhPqj1SNgpAdeSS6a6fwE6Bo.jpg", 8, "Follows the personal and professional lives of a group of doctors at Seattle’s Grey Sloan Memorial Hospital.", "Grey's Anatomy" },
                    { 5, "2021-03-19", "https://image.tmdb.org/t/p/w300/6kbAMLteGO8yyewYau6bJ683sw7.jpg", 8, "Following the events of “Avengers: Endgame”, the Falcon, Sam Wilson and the Winter Soldier, Bucky Barnes team up in a global adventure that tests their abilities, and their patience.", "The Falcon and the Winter Soldier" },
                    { 4, "2020-01-31", "https://image.tmdb.org/t/p/w300/xUtOM1QO4r8w8yeE00QvBdq58N5.jpg", 8, "A small Norwegian town experiencing warm winters and violent downpours seems to be headed for another Ragnarök -- unless someone intervenes in time.", "Ragnarok" },
                    { 3, "2014-10-07", "https://image.tmdb.org/t/p/w300/lJA2RCMfsWoskqlQhXPSLFQGXEJ.jpg", 8, "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.", "The Flash" },
                    { 2, "2016-01-25", "https://image.tmdb.org/t/p/w300/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg", 8, "Bored and unhappy as the Lord of Hell, Lucifer Morningstar abandoned his throne and retired to Los Angeles, where he has teamed up with LAPD detective Chloe Decker to take down criminals. But the longer he's away from the underworld, the greater the threat that the worst of humanity could escape.", "Lucifer" },
                    { 1, "2021-06-09", "https://image.tmdb.org/t/p/w300/kEl2t3OhXc3Zb9FBh1AuYzRTgZp.jpg", 8, "After stealing the Tesseract during the events of “Avengers: Endgame,” an alternate version of Loki is brought to the mysterious Time Variance Authority, a bureaucratic organization that exists outside of time and space and monitors the timeline. They give Loki a choice: face being erased from existence due to being a “time variant”or help fix the timeline and stop a greater threat.", "Loki" },
                    { 19, "2018-10-25", "https://image.tmdb.org/t/p/w300/qTZIgXrBKURBK1KrsT7fe3qwtl9.jpg", 9, "In a place where young witches, vampires, and werewolves are nurtured to be their best selves in spite of their worst impulses, Klaus Mikaelson’s daughter, 17-year-old Hope Mikaelson, Alaric Saltzman’s twins, Lizzie and Josie Saltzman, among others, come of age into heroes and villains at The Salvatore School for the Young and Gifted.", "Legacies" },
                    { 9, "2021-06-04", "https://image.tmdb.org/t/p/w300/rgMfhcrVZjuy5b7Pn0KzCRCEnMX.jpg", 8, "On a perilous adventure across a post-apocalyptic world, a lovable boy who's half-human and half-deer searches for a new beginning with a gruff protector.", "Sweet Tooth" },
                    { 20, "2021-05-07", "https://image.tmdb.org/t/p/w300/9yxep7oJdkj3Pla9TD9gKflRApY.jpg", 7, "As the world's first generation of superheroes (who received their powers in the 1930s) become the revered elder guard in the present, their superpowered children struggle to live up to the legendary feats of their parents.", "Jupiter's Legacy" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_FavoriteMovies_MovieId",
                table: "FavoriteMovies",
                column: "MovieId");

            migrationBuilder.CreateIndex(
                name: "IX_FavoriteMovies_UserId",
                table: "FavoriteMovies",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_FavoriteTvShows_TvShowId",
                table: "FavoriteTvShows",
                column: "TvShowId");

            migrationBuilder.CreateIndex(
                name: "IX_FavoriteTvShows_UserId",
                table: "FavoriteTvShows",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FavoriteMovies");

            migrationBuilder.DropTable(
                name: "FavoriteTvShows");

            migrationBuilder.DropTable(
                name: "Movies");

            migrationBuilder.DropTable(
                name: "TvShows");

            migrationBuilder.DropTable(
                name: "User");
        }
    }
}
