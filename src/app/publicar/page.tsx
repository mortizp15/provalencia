"use client";

import { useState } from "react";
import { supabaseClient } from "@/utils/supabase/client";
import { toast } from "sonner";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50),
  email: z.string().email("Introduce un email válido"),
  ubicacion: z.string().min(2, "La ubicación es obligatoria"),
  rol: z.enum(["profesional", "afectado"]),
  descripcion: z.string(),
  tipo_establecimiento: z.string().optional(),
  telefono: z.string().min(9, "El teléfono debe tener al menos 9 dígitos"),
  nombre_servicio: z.string().optional(),
  disponibilidad: z.string().optional(),
});

export default function PublicarForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      email: "",
      ubicacion: "",
      rol: "afectado",
      tipo_establecimiento: "",
      telefono: "",
      descripcion: "",
      disponibilidad: "",
      nombre_servicio: ""
    },
  });

  const [loading, setLoading] = useState(false);
  const [rol, setRol] = useState<"profesional" | "afectado" | "">("");

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true)
    try {
    const usuario = {
      nombre: data.nombre,
      email: data.email,
      ubicacion: data.ubicacion,
      rol: data.rol,
    };

    // Insertar usuario
    const { data: usuarioData, error: usuarioError } = await supabaseClient
      .from("usuario")
      .insert([usuario])
      .select();

    if (usuarioError) {
      console.error("Error al insertar usuario:", usuarioError);
      return;
    }

    const userId = usuarioData?.[0]?.id; // ID del usuario creado

    if (data.rol === "profesional" && userId) {
      // Insertar en tabla servicio si el usuario es profesional
      const { error: servicioError } = await supabaseClient
        .from("servicio")
        .insert([
          {
            id_profesional: userId,
            nombre_servicio: data.nombre_servicio,
            descripcion: data.descripcion,
            disponibilidad: data.disponibilidad,
            telefono: data.telefono,
            email: data.email,
            ubicacion: data.ubicacion,
          },
        ]);

      if (servicioError) {
        console.error("Error al insertar servicio: ", servicioError);
        return;
      }
    } else if (data.rol === "afectado" && userId) {
      // Insertar en tabla ayuda si el usuario es un afectado
      const { error: ayudaError } = await supabaseClient.from("ayuda").insert([
        {
          id_afectado: userId,
          descripcion: data.descripcion,
          tipo_establecimiento: data.tipo_establecimiento,
          telefono: data.telefono,
          email: data.email,
          ubicacion: data.ubicacion,
        },
      ]);

      if (ayudaError) {
        console.error("Error al insertar ayuda: ", ayudaError);
        return;
      }
    }

    toast.success("¡Solicitud creada exitosamente!");
    form.reset({
      nombre: "",
      email: "",
      ubicacion: "",
      rol: "afectado",
      tipo_establecimiento: "",
      telefono: "",
      descripcion: "",
      disponibilidad: "",
      nombre_servicio: ""
    });
  } catch (error) {
    console.error("Error en la solicitud: ", error)
    toast.error("Hubo un error al procesar tu solicitud")
  } finally {
    setLoading(false)
  }
  };

  return (
    <section className="sm:w-6/12 w-3/4 mx-auto">
        <Breadcrumb className="mb-7 mt-5">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/aviso-legal">Publicar Ayuda o Servicio</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className="text-center font-bold text-2xl mt-5">Publicar</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Tu nombre" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="tu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ubicacion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ubicación</FormLabel>
                <FormControl>
                  <Input placeholder="Tu ubicación" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rol"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rol</FormLabel>
                <Select
                  onValueChange={(value) => {
                    field.onChange(value);
                    setRol(value as "profesional" | "afectado");
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona tu rol" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="profesional">Profesional</SelectItem>
                    <SelectItem value="afectado">Afectado</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {rol === "profesional" && (
            <>
              <FormField
                control={form.control}
                name="nombre_servicio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre del Servicio</FormLabel>
                    <Select
                      onValueChange={(value) => field.onChange(value)}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un servicio" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Atención médica de emergencia">
                          Atención médica de emergencia
                        </SelectItem>
                        <SelectItem value="Psicólogos y apoyo emocional">
                          Psicólogos y apoyo emocional
                        </SelectItem>
                        <SelectItem value="Servicios de evacuación">
                          Servicios de evacuación
                        </SelectItem>
                        <SelectItem value="Rescate de personas o animales">
                          Rescate de personas o animales
                        </SelectItem>
                        <SelectItem value="Asesoramiento y gestión de seguros">
                          Asesoramiento y gestión de seguros
                        </SelectItem>
                        <SelectItem value="Asistencia legal en emergencias">
                          Asistencia legal en emergencias
                        </SelectItem>
                        <SelectItem value="Fontanería">Fontanería</SelectItem>
                        <SelectItem value="Electricidad">
                          Electricidad
                        </SelectItem>
                        <SelectItem value="Carpintería">Carpintería</SelectItem>
                        <SelectItem value="Reparación de tejados y techos">
                          Reparación de tejados y techos
                        </SelectItem>
                        <SelectItem value="Reparación de paredes y estructuras dañadas">
                          Reparación de paredes y estructuras dañadas
                        </SelectItem>
                        <SelectItem value="Reparación de sistemas de calefacción o aire acondicionado">
                          Reparación de sistemas de calefacción o aire
                          acondicionado
                        </SelectItem>
                        <SelectItem value="Instalación de generadores eléctricos">
                          Instalación de generadores eléctricos
                        </SelectItem>
                        <SelectItem value="Construcción de refugios temporales">
                          Construcción de refugios temporales
                        </SelectItem>
                        <SelectItem value="Reparación de electrodomésticos">
                          Reparación de electrodomésticos
                        </SelectItem>
                        <SelectItem value="Limpieza de escombros y restos de inundación">
                          Limpieza de escombros y restos de inundación
                        </SelectItem>
                        <SelectItem value="Desinfección de espacios afectados por agua o moho">
                          Desinfección de espacios afectados por agua o moho
                        </SelectItem>
                        <SelectItem value="Transporte de bienes o personas">
                          Transporte de bienes o personas
                        </SelectItem>
                        <SelectItem value="Transporte de materiales de construcción o ayuda humanitaria">
                          Transporte de materiales de construcción o ayuda
                          humanitaria
                        </SelectItem>
                        <SelectItem value="Distribución de alimentos y víveres">
                          Distribución de alimentos y víveres
                        </SelectItem>
                        <SelectItem value="Cocinas comunitarias">
                          Cocinas comunitarias
                        </SelectItem>
                        <SelectItem value="Entrega de agua potable">
                          Entrega de agua potable
                        </SelectItem>
                        <SelectItem value="Reparto de ropa y suministros básicos">
                          Reparto de ropa y suministros básicos
                        </SelectItem>
                        <SelectItem value="Servicios de apoyo en la reubicación">
                          Servicios de apoyo en la reubicación
                        </SelectItem>
                        <SelectItem value="Instalación de Wi-Fi de emergencia">
                          Instalación de Wi-Fi de emergencia
                        </SelectItem>
                        <SelectItem value="Reparación de dispositivos electrónicos">
                          Reparación de dispositivos electrónicos
                        </SelectItem>
                        <SelectItem value="Asesoría sobre trámites y ayudas gubernamentales">
                          Asesoría sobre trámites y ayudas gubernamentales
                        </SelectItem>
                        <SelectItem value="Rescate y traslado de animales domésticos">
                          Rescate y traslado de animales domésticos
                        </SelectItem>
                        <SelectItem value="Atención veterinaria de emergencia">
                          Atención veterinaria de emergencia
                        </SelectItem>
                        <SelectItem value="Alojamiento y cuidado temporal de animales">
                          Alojamiento y cuidado temporal de animales
                        </SelectItem>
                        <SelectItem value="Apoyo emocional y psicológico">
                          Apoyo emocional y psicológico
                        </SelectItem>
                        <SelectItem value="Instalación de paneles solares temporales">
                          Instalación de paneles solares temporales
                        </SelectItem>
                        <SelectItem value="Distribución de baterías portátiles">
                          Distribución de baterías portátiles
                        </SelectItem>
                        <SelectItem value="Acompañamiento y asistencia a personas mayores">
                          Acompañamiento y asistencia a personas mayores
                        </SelectItem>
                        <SelectItem value="Otros">Otros</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="disponibilidad"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Disponibilidad</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu disponibilidad" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}
          {rol === "afectado" && (
            <FormField
              control={form.control}
              name="tipo_establecimiento"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de Establecimiento</FormLabel>
                  <FormControl>
                    <Input placeholder="Tipo de establecimiento" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          <FormField
            control={form.control}
            name="descripcion"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripción</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe tu servicio o necesidad"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telefono"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Tu número de teléfono"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={loading}>
            {loading ? "Publicando..." : "¡Publicar!"}
          </Button>
        </form>
      </Form>
    </section>
  );
}
