﻿// <auto-generated />
using System;
using BackArniway.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace BackArniway.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20240428005306_fixAtributteNameTable")]
    partial class fixAtributteNameTable
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.4");

            modelBuilder.Entity("Models.Product", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("arrivalDate")
                        .HasColumnType("TEXT");

                    b.Property<int>("category")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("expirationDate")
                        .HasColumnType("TEXT");

                    b.Property<string>("name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<double>("price")
                        .HasColumnType("REAL");

                    b.Property<long>("quantity")
                        .HasColumnType("INTEGER");

                    b.Property<string>("status")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("supplier")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("team")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("unitMeasure")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<double>("weight")
                        .HasColumnType("REAL");

                    b.HasKey("id");

                    b.ToTable("Products");
                });
#pragma warning restore 612, 618
        }
    }
}
