import { useState } from "react";
import windmarLogo from "@/assets/windmar-logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type YesNo = "si" | "no" | "";

interface FormData {
  producto: string;
  numeroAlterno: string;
  ultimoTratamiento: string;
  citaCoordinada: string;
  leyQuiebra: YesNo;
  empiricaMayor650: YesNo;
  casaMultifamiliar: YesNo;
  contactoConsultores: YesNo;
  propiedadUnica: YesNo;
  apagonesMuchos: YesNo;
  apagonesFrecuencia: string;
  cortesAgua: YesNo;
  cortesAguaFrecuencia: string;
  calentadorElectrico: YesNo;
  personasEnCasa: string;
  pagoLuma: string;
  plantaElectrica: YesNo;
  techoConcreto: YesNo;
  techoTransitable: YesNo;
  elementosTecho: YesNo;
  pinUbicacion: YesNo;
  pinLatitud: string;
  pinLongitud: string;
  pinLink: string;
}

const initialForm: FormData = {
  producto: "",
  numeroAlterno: "",
  ultimoTratamiento: "",
  citaCoordinada: "",
  leyQuiebra: "",
  empiricaMayor650: "",
  casaMultifamiliar: "",
  contactoConsultores: "",
  propiedadUnica: "",
  apagonesMuchos: "",
  apagonesFrecuencia: "",
  cortesAgua: "",
  cortesAguaFrecuencia: "",
  calentadorElectrico: "",
  personasEnCasa: "",
  pagoLuma: "",
  plantaElectrica: "",
  techoConcreto: "",
  techoTransitable: "",
  elementosTecho: "",
  pinLatitud: "",
  pinLongitud: "",
  pinLink: "",
  pinUbicacion: "",
};

function RadioYesNo({
  name,
  value,
  onChange,
}: {
  name: string;
  value: YesNo;
  onChange: (v: YesNo) => void;
}) {
  return (
    <div className="flex items-center gap-4 shrink-0">
      <label className="flex items-center gap-1.5 cursor-pointer text-sm text-foreground font-medium">
        <input
          type="radio"
          name={name}
          checked={value === "si"}
          onChange={() => onChange("si")}
          className="w-4 h-4 accent-primary"
        />
        Sí
      </label>
      <label className="flex items-center gap-1.5 cursor-pointer text-sm text-foreground font-medium">
        <input
          type="radio"
          name={name}
          checked={value === "no"}
          onChange={() => onChange("no")}
          className="w-4 h-4 accent-primary"
        />
        No
      </label>
    </div>
  );
}

function QuestionRow({
  question,
  name,
  value,
  onChange,
}: {
  question: string;
  name: string;
  value: YesNo;
  onChange: (v: YesNo) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-6 py-3 border-b border-border/40 last:border-0">
      <span className="text-sm text-foreground/80 leading-relaxed flex-1">
        {question}
      </span>
      <RadioYesNo name={name} value={value} onChange={onChange} />
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-xs font-bold uppercase tracking-wider text-primary/70 mb-1 pb-2 border-b-2 border-primary/15">
      {children}
    </h3>
  );
}

export default function PrequalificationForm() {
  const [form, setForm] = useState<FormData>(initialForm);

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div className="min-h-screen bg-background py-10 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 flex flex-col items-center gap-5">
          <img src={windmarLogo} alt="WindMar Home" width={200} height={126} className="h-14 w-auto font-serif" />
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-accent leading-tight">
              ¡Crea la precualificación
            </h1>
            <h2 className="text-2xl md:text-3xl font-extrabold text-primary leading-tight">
              de un Lead!
            </h2>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Producto */}
          <section className="bg-card rounded-2xl border border-border/60 p-6 shadow-sm">
            <Label className="text-sm font-semibold text-foreground mb-2.5 block">
              Seleccione el producto:
            </Label>
            <Select value={form.producto} onValueChange={(v) => update("producto", v)}>
              <SelectTrigger className="w-full bg-background">
                <SelectValue placeholder="Seleccionar producto" />
              </SelectTrigger>
              <SelectContent>
              <SelectItem value="solar">Sistema Solar</SelectItem>
                <SelectItem value="bateria">Batería</SelectItem>
                <SelectItem value="cisterna">Cisterna</SelectItem>
                <SelectItem value="calentador">Calentador Solar</SelectItem>
                <SelectItem value="roofing">Roofing</SelectItem>
                <SelectItem value="tratamiento">Sistema de Tratamiento</SelectItem>
              </SelectContent>
            </Select>
          </section>

          {/* Número alterno + Fechas */}
          <section className="bg-card rounded-2xl border border-border/60 p-6 shadow-sm space-y-5">
            <div>
              <Label className="text-sm font-semibold text-foreground mb-2.5 block">
                Número alterno:
              </Label>
              <Input
                placeholder="Número alterno"
                value={form.numeroAlterno}
                onChange={(e) => update("numeroAlterno", e.target.value)}
                className="bg-background"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <Label className="text-sm font-semibold text-foreground mb-2.5 block">
                  Último tratamiento dado:
                </Label>
                <Input
                  type="date"
                  value={form.ultimoTratamiento}
                  onChange={(e) => update("ultimoTratamiento", e.target.value)}
                  className="bg-background"
                />
              </div>
              <div>
                <Label className="text-sm font-semibold text-foreground mb-2.5 block">
                  Cita coordinada:
                </Label>
                <Input
                  type="datetime-local"
                  value={form.citaCoordinada}
                  onChange={(e) => update("citaCoordinada", e.target.value)}
                  className="bg-background"
                />
              </div>
            </div>
          </section>

          {/* Preguntas */}
          <section className="bg-card rounded-2xl border border-border/60 p-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-2">
              {/* Columna izquierda */}
              <div>
                <SectionTitle>Información crediticia y propiedad</SectionTitle>
                <QuestionRow
                  question="Ley de quiebra en los últimos 7 años"
                  name="leyQuiebra"
                  value={form.leyQuiebra}
                  onChange={(v) => update("leyQuiebra", v)}
                />
                <QuestionRow
                  question="Empírica mayor a 650 puntos"
                  name="empiricaMayor650"
                  value={form.empiricaMayor650}
                  onChange={(v) => update("empiricaMayor650", v)}
                />
                <QuestionRow
                  question="¿Su casa es Multifamiliar?"
                  name="casaMultifamiliar"
                  value={form.casaMultifamiliar}
                  onChange={(v) => update("casaMultifamiliar", v)}
                />
                <QuestionRow
                  question="¿Ha tenido contacto con alguno de nuestros consultores?"
                  name="contactoConsultores"
                  value={form.contactoConsultores}
                  onChange={(v) => update("contactoConsultores", v)}
                />
                <QuestionRow
                  question="¿La propiedad está únicamente a su nombre o compartida?"
                  name="propiedadUnica"
                  value={form.propiedadUnica}
                  onChange={(v) => update("propiedadUnica", v)}
                />
                <QuestionRow
                  question="¿Ha tenido muchos apagones en su área?"
                  name="apagonesMuchos"
                  value={form.apagonesMuchos}
                  onChange={(v) => {
                    update("apagonesMuchos", v);
                    if (v !== "si") update("apagonesFrecuencia", "");
                  }}
                />
                {form.apagonesMuchos === "si" && (
                  <div className="py-3 pl-4 border-b border-border/40">
                    <Label className="text-sm text-foreground/80 mb-2 block">
                      ¿Cuántas veces al mes ocurren estos apagones?
                    </Label>
                    <Select
                      value={form.apagonesFrecuencia}
                      onValueChange={(v) => update("apagonesFrecuencia", v)}
                    >
                      <SelectTrigger className="w-full max-w-[200px] h-9 text-sm">
                        <SelectValue placeholder="Seleccione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1 - 2 veces</SelectItem>
                        <SelectItem value="3-5">3 - 5 veces</SelectItem>
                        <SelectItem value="6-10">6 - 10 veces</SelectItem>
                        <SelectItem value="mas-10">Más de 10 veces</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
                <QuestionRow
                  question="¿En tu zona es habitual los cortes de agua?"
                  name="cortesAgua"
                  value={form.cortesAgua}
                  onChange={(v) => {
                    update("cortesAgua", v);
                    if (v !== "si") update("cortesAguaFrecuencia", "");
                  }}
                />
                {form.cortesAgua === "si" && (
                  <div className="py-3 pl-4 border-b border-border/40">
                    <Label className="text-sm text-foreground/80 mb-2 block">
                      ¿Cuántas veces al mes ocurren estos cortes de agua?
                    </Label>
                    <Select
                      value={form.cortesAguaFrecuencia}
                      onValueChange={(v) => update("cortesAguaFrecuencia", v)}
                    >
                      <SelectTrigger className="w-full max-w-[200px] h-9 text-sm">
                        <SelectValue placeholder="Seleccione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2">1 - 2 veces</SelectItem>
                        <SelectItem value="3-5">3 - 5 veces</SelectItem>
                        <SelectItem value="6-10">6 - 10 veces</SelectItem>
                        <SelectItem value="mas-10">Más de 10 veces</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>

              {/* Columna derecha */}
              <div>
                <SectionTitle>Servicios y estructura</SectionTitle>
                <div className="flex items-center justify-between gap-6 py-3 border-b border-border/40">
                  <span className="text-sm text-foreground/80 leading-relaxed flex-1">
                    ¿Cuánto paga actualmente con LUMA?
                  </span>
                  <Input
                    placeholder="$"
                    value={form.pagoLuma}
                    onChange={(e) => update("pagoLuma", e.target.value)}
                    className="w-24 bg-background text-sm"
                  />
                </div>
                <QuestionRow
                  question="¿Usas calentador eléctrico?"
                  name="calentadorElectrico"
                  value={form.calentadorElectrico}
                  onChange={(v) => {
                    update("calentadorElectrico", v);
                    if (v !== "si") update("personasEnCasa", "");
                  }}
                />
                {form.calentadorElectrico === "si" && (
                  <div className="py-3 pl-4 border-b border-border/40">
                    <Label className="text-sm text-foreground/80 mb-2 block">
                      ¿Con cuántas personas vive?
                    </Label>
                    <Select
                      value={form.personasEnCasa}
                      onValueChange={(v) => update("personasEnCasa", v)}
                    >
                      <SelectTrigger className="w-full max-w-[200px] h-9 text-sm">
                        <SelectValue placeholder="Seleccione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 persona</SelectItem>
                        <SelectItem value="2">2 personas</SelectItem>
                        <SelectItem value="3-4">3 - 4 personas</SelectItem>
                        <SelectItem value="5-6">5 - 6 personas</SelectItem>
                        <SelectItem value="mas-6">Más de 6 personas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}
                <QuestionRow
                  question="¿Tiene planta eléctrica?"
                  name="plantaElectrica"
                  value={form.plantaElectrica}
                  onChange={(v) => update("plantaElectrica", v)}
                />
                <QuestionRow
                  question="Techo es en concreto"
                  name="techoConcreto"
                  value={form.techoConcreto}
                  onChange={(v) => update("techoConcreto", v)}
                />
                <QuestionRow
                  question="El techo es transitable"
                  name="techoTransitable"
                  value={form.techoTransitable}
                  onChange={(v) => update("techoTransitable", v)}
                />
                <QuestionRow
                  question="Elementos en el techo"
                  name="elementosTecho"
                  value={form.elementosTecho}
                  onChange={(v) => update("elementosTecho", v)}
                />
                <QuestionRow
                  question="PIN de ubicación"
                  name="pinUbicacion"
                  value={form.pinUbicacion}
                  onChange={(v) => {
                    update("pinUbicacion", v);
                    if (v !== "si") {
                      update("pinLatitud", "");
                      update("pinLongitud", "");
                      update("pinLink", "");
                    }
                  }}
                />
                {form.pinUbicacion === "si" && (
                  <div className="col-span-2 space-y-3 pl-4 border-l-2 border-primary/20">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <Label className="text-xs text-muted-foreground mb-1 block">Latitud</Label>
                        <Input
                          placeholder="Ej: 18.4655"
                          value={form.pinLatitud}
                          onChange={(e) => update("pinLatitud", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-muted-foreground mb-1 block">Longitud</Label>
                        <Input
                          placeholder="Ej: -66.1057"
                          value={form.pinLongitud}
                          onChange={(e) => update("pinLongitud", e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <Label className="text-xs text-muted-foreground mb-1 block">O ingresa el link de ubicación</Label>
                      <Input
                        placeholder="Ej: https://maps.google.com/..."
                        value={form.pinLink}
                        onChange={(e) => update("pinLink", e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Submit */}
          <Button type="submit" variant="windmar" size="lg" className="w-full text-base py-6 rounded-2xl">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
}
